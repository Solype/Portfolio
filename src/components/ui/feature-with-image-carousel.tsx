import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Contributor {
  login?: string; // GitHub login; without it only the name is shown
  name?: string | null;
}

export interface FeatureProps {
  badge: string;
  title: string;
  description: string | React.ReactNode;
  images: string[];
  contributors?: Contributor[];
}

function Contributors({ contributors }: { contributors: Contributor[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Contributors
      </p>
      <div className="flex flex-wrap gap-3">
        {contributors.map(({ login, name }) => !login ? (
          <span key={name} className="flex items-center rounded-full border bg-background px-3 py-1 text-sm">
            {name}
          </span>
        ) : (
          <a
            key={login}
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
            title={name ? `${name} (@${login})` : `@${login}`}
            className="flex items-center gap-2 rounded-full border bg-background py-1 pl-1 pr-3 text-sm transition-colors hover:bg-muted"
          >
            <img
              src={`https://github.com/${login}.png?size=64`}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{name || login}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Feature({ badge, title, description, images, contributors }: FeatureProps) {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="flex gap-4 flex-col items-start">
          <Badge>{badge}</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-regular text-left">
            {title}
          </h2>
          <div className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground text-left max-h-80 overflow-y-auto">
            {description}
          </div>
          {contributors && contributors.length > 0 && <Contributors contributors={contributors} />}
        </div>
        {images.length > 0 && (
          <div className="w-full px-10">
            <Carousel opts={{ loop: images.length > 1 }}>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={image}>
                    <div className="flex aspect-video items-center justify-center rounded-md bg-muted p-2">
                      <img
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain rounded-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}

export { Feature };
