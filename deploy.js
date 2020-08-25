var s3 = require("s3")

try {
  var secrets = require("./secrets.json")
} catch (e) {
  console.error("Secrets-file not found. S3 deployment disabled. " + e)
}

if (secrets && secrets.s3) {
  // Init S3 client
  var client = s3.createClient({
    s3RetryCount: 6,
    s3RetryDelay: 30,
    s3Options: {
      accessKeyId: secrets.s3.key,
      secretAccessKey: secrets.s3.secret,
      region: secrets.s3.region,
    },
  })

  // Sync dir
  var params = {
    localDir: "public",
    deleteRemoved: true,
    s3Params: {
      Bucket: secrets.s3.bucket,
      Prefix: secrets.s3.remoteDir,
    },
  }

  var uploader = client.uploadDir(params)
  uploader.on("error", function (err) {
    console.error("unable to sync:", err.stack)
  })
  uploader.on("progress", function () {
    console.log("progress", uploader.progressAmount, uploader.progressTotal)
  })
  uploader.on("end", function () {
    console.log("done uploading")
  })
}
