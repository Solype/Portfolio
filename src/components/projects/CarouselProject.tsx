import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "mysql",
  "cplusplus",
  "c",
  "python",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
]

export function IconCloudDemo() {
    return (
        <div className="w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} onIconClick={(e : any) => console.log(e)} />
        </div>
    )
}
