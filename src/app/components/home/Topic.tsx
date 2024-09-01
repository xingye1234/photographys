import React from "react";
// import { Box, Card, Flex, Text, Grid } from "@radix-ui/themes";
import { getBannerImages } from "@/app/web/home";
import { useQuery } from "@tanstack/react-query";
import { Col, Divider, Row, Card } from "antd";

const topicList = [
  {
    id: 1,
    img: "/assets/home/banner/1.jpeg",
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 2,
    img: "/assets/home/banner/2.jpeg",
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 3,
    img: "/assets/home/banner/3.jpeg",
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
  {
    id: 4,
    img: "/assets/home/banner/4.jpeg",
    link: "#",
    title: "Teodros Girmay",
    desc: "Engineering",
  },
];

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

export default function Topic() {
  const results = useQuery({ queryKey: ["banner"], queryFn: getBannerImages });
  // console.log(results)

  return (
    <div>
      <span className="border-l-4 border-blue-500 pl-2"></span>
      <span className="font-bold">专题</span>

      <Row gutter={16} className="mt-4">
        {topicList.map((_, index) => (
          <Col span={6} key={index}>
            <Card>
              <div className="flex flex-col">
                <img
                  src={_.img}
                  alt={_.title}
                  className="object-cover w-full h-[12rem]"
                ></img>
                <div>
                  <div className="font-bold text-lg">Teodros Girmay</div>
                  <div className="font-bold text-lg">Engineering</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
