import { cn } from "@/lib/utils"

export interface AuthorCardProps {
  className?: string
  backgroundImage?: string
  author: {
    name: string
    avatar: string
    readTime?: string
  }
  content: {
    title: string
    description: string
  }
}

export const AuthorCard = ({ 
  className,
  backgroundImage,
  author,
  content
}: AuthorCardProps) => {
  return (
    <div className="max-w-md w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-lg mx-auto flex flex-col justify-between bg-cover bg-center",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60" />
        <div className="flex flex-row items-center space-x-4 z-10 bg-otherDarkBlue w-full p-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-in-out">
          <img
            height={100}
            width={100}
            alt={`${author.name}'s avatar`}
            src={author.avatar}
            className="h-10 w-10 rounded-full border-2 object-cover bg-white"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author.name}
            </p>
            {author.readTime && (
              <p className="text-sm text-gray-400">{author.readTime}</p>
            )}
          </div>
        </div>
        <div className="text content p-4 bg-otherDarkBlue">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {content.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4 
            opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out 
            group-hover/card:opacity-100 group-hover/card:max-h-40">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  )
}