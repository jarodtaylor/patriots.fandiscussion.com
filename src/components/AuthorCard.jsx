import React from "react"
import Icon from "./Icon"

const SocialIcon = ({ url, iconName }) => {
  if (!url) return null

  return (
    <a className="block w-6" href={url}>
      <span className="block w-6 h-6">
        <Icon name={iconName} />
      </span>
    </a>
  )
}

const renderSocialIcons = socialUrls => {
  return socialUrls.map(site => {
    return (
      <SocialIcon key={site.iconName} url={site.url} iconName={site.iconName} />
    )
  })
}

const renderSportMemories = memorableMoments => {
  return memorableMoments.map(memory => {
    console.log(memory)
    return <span className="text-xs">{memory}</span>
  })
}

const AuthorCard = ({ author }) => {
  const {
    name,
    memorableMoments,
    facebookUrl,
    instagramUrl,
    twitterUrl,
    websiteUrl,
    photo,
  } = author

  const socialUrls = [
    {
      url: facebookUrl,
      iconName: "facebook-icon",
    },
    {
      url: instagramUrl,
      iconName: "instagram-icon",
    },
    {
      url: twitterUrl,
      iconName: "twitter-icon2",
    },
    {
      url: websiteUrl,
      iconName: "website-icon",
    },
  ]

  console.log(memorableMoments)

  return (
    <article className="flex flex-wrap bg-gray-200 py-6 px-8 -ml-4 -mr-4">
      <div className="flex flex-wrap justify-center w-full">
        <img
          className="rounded-full w-20"
          src={photo.file.url}
          alt={photo.title}
        />
        <h6 className="text-lg w-full text-center pt-2">{name}</h6>
      </div>
      <div className="flex flex-wrap justify-center w-full py-4 mb-2">
        {renderSocialIcons(socialUrls)}
      </div>
      <div className="text-center w-full text-sm mb-1">
        <h6 className="uppercase pb-2">Memorable Sports Moments</h6>
        {memorableMoments.join(", ")}
      </div>
    </article>
  )
}

export default AuthorCard
