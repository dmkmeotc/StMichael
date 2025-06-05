"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import Homebody from '@/components/homebody';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const cards = [
  { title: <Homebody/>, description: 'First card content' },
  { title: 'Card 2', description: 'Second card content' },
  { title: 'Card 3', description: 'Third card content' },
]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  max-w-3/4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      
    >
      <CarouselContent >
        {cards.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">

                  <span className="text-4xl font-semibold">{card.title}</span>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
