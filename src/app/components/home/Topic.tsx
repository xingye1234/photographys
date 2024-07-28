import React from "react";
import { Box, Card, Flex, Text, Avatar, Grid } from "@radix-ui/themes";
import banners from "@/app/images/banner/banner";
import Image from "next/image";

const topicList = [
  {
    id: 1,
    img: banners.banner1,
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 2,
    img: banners.banner2,
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 3,
    img: banners.banner3,
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 4,
    img: banners.banner4,
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
];

export default function Topic() {
  return (
    <div>
      <span className="border-l-4 border-blue-500 pl-2"></span>
      <span className="font-bold">专题</span>

      <Box mt={"4"}>
        <Grid
          columns={{
            xs: "2",
            md: "4",
          }}
          gap="4"
          width="auto"
        >
          {topicList.map((_, index) => (
            <Card key={index}>
              <Flex gap="3" direction={"column"}>
                {/* <Image
                  src={_.img}
                  alt={_.title}
                  style={{objectFit: "fill"}}
                  width={200}
                  height={200}
                ></Image> */}
                <img src={_.img} alt={_.title} className="object-cover w-full h-[12rem]"></img>
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
