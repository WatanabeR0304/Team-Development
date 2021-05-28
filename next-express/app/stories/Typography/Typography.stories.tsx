import React from "react";
import Typography from "@components/Typography";

export default {
  component: Typography,
  title: "Typography/Typography",
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Typography",
};
