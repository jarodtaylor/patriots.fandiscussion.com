import React from "react"
import Icon from "./Icon"

const SocialIcon = ({ url, iconName }) => {
  if (!url) return null

  return (
    <a className="inline-block w-6 h-6 mx lg:w-8 lg:h-8" href={url}>
      <span className="block w-6 h-6 lg:w-8 lg:h-8">
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
      iconName: "www-icon",
    },
  ]

  return (
    <article className="flex flex-wrap justify-center bg-gray-200 py-6 px-8 -ml-4 -mr-4 lg:rounded lg:mx-0">
      <div className="flex flex-wrap justify-center w-full">
        <img
          className="rounded-full w-20 h-20 lg:w-32 lg:h-32"
          src={photo.file.url}
          alt={photo.title}
        />
        <h6 className="text-lg w-full text-center pt-2 lg:text-2xl">{name}</h6>
      </div>
      <div className="text-center w-full py-4 mb-2">
        {renderSocialIcons(socialUrls)}
      </div>
      <div className="text-center w-full text-sm mb-1 lg:text-base lg:max-w-3xl">
        <h6 className="uppercase pb-2 lg:text-lg">Memorable Sports Moments</h6>
        {memorableMoments.join(", ")}
      </div>
    </article>
  )
}

export default AuthorCard
