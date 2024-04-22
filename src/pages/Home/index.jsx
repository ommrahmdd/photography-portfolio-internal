import { Card } from "antd";
import React from "react";
import gallery from "./../../assets/images/gallery.jpg";
import clients from "./../../assets/images/clients.jpg";
import questions from "./../../assets/images/questions.jpg";
import services from "./../../assets/images/services.jpg";
import work from "./../../assets/images/work.jpg";
import { useNavigate } from "@tanstack/react-router";

const SERVICES = [
  {
    title: "Clients",
    description:
      "Client services encompass a range of activities dedicated to ensuring the satisfaction and success of our valued customers. From initial inquiries to ongoing support, our team is committed to delivering exceptional service at every stage of the client journey",
    route: "/clients",
    image: clients,
  },
  {
    title: "Questions",
    description:
      "Welcome to the Questions section of our website dashboard! This is your go-to place for any inquiries or assistance you may need while navigating our platform. Whether you're experiencing technical issues, have questions about specific features, or simply need clarification on something, we're here to help",
    route: "/questions",
    image: questions,
  },
  {
    title: "gallery",
    description:
      "Explore and discover a curated collection of images that showcase the essence and capabilities of our platform. From stunning visuals to informative graphics, our gallery offers a glimpse into the diverse range of possibilities available to you",
    route: "/gallery",
    image: gallery,
  },
  {
    title: "services",
    description:
      "Welcome to the Services section of our website dashboard! Here, you'll find a comprehensive list of the offerings available to you as a valued member of our platform. Whether you're looking for tools to streamline your workflow, resources to enhance your projects, or expert assistance to achieve your goals, we've got you covered.",
    route: "/services",
    image: services,
  },
  {
    title: "work",
    description:
      "From organizing project timelines to tracking milestones and deadlines, you'll find all the tools you need to stay on top of your work and deliver exceptional results. Collaborate seamlessly with team members",
    route: "/work",
    image: work,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Introduction */}
      <div className="my-20 space-y-6">
        <h5 className="text-3xl capitalize font-bold text-cGrey-15">
          Photography dashboard
        </h5>
        <p className="text-2xl font-light text-cGrey-12 w-11/12">
          Step into the world of visual storytelling with our photography
          dashboard. This platform is meticulously crafted to elevate your
          photography experience, providing you with tools and insights to
          capture, organize, and showcase your best work. Whether you're a
          seasoned professional or an aspiring enthusiast, this dashboard is
          your gateway to unleashing your creativity and sharing your passion
          with the world.
        </p>
      </div>
      <div className="my-20 space-y-6">
        <h5 className="text-3xl capitalize font-bold text-cGrey-15">
          Sections managmenet
        </h5>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((el, index) => (
            <Card
              key={index}
              hoverable
              className="bg-dark-08 !text-cGrey-15 border-cOrange"
              cover={
                <img
                  src={el.image}
                  alt="test"
                  className="w-full h-80 object-cover transition-all duration-300 ease-in-out p-10 hover:p-0 "
                />
              }
              onClick={() =>
                navigate({
                  to: el.route,
                })
              }
            >
              <Card.Meta
                title={
                  <h6 className="text-cGrey-25 text-xl md:text-2xl lg:text-3xl uppercase font-light mb-3">
                    {el.title}
                  </h6>
                }
                description={<p className="text-cGrey-25">{el.description}</p>}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
