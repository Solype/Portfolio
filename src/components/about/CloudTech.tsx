import { IconCloud } from "@/components/ui/interactive-icon-cloud"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                    >
                        <Minus />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                            coucou
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                            Calories/day
                        </div>
                    </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 shrink-0 rounded-full"
                        >
                            <Plus />
                            <span className="sr-only">Increase</span>
                        </Button>
                    </div>
                </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}


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
  "gnubash",
  "linux",
  "sqlite",
  "fastapi"
]

export function IconCloudDemo() {
    return (
        <div className="w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} onIconClick={(e : any) => console.log(e)} />
            <DrawerDemo />
        </div>
    )
}
