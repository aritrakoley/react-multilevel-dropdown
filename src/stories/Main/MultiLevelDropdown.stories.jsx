import MultiLevelDropdown from "../../components/MultiLevelDropdown/MultiLevelDropdown";
import * as data from './data';

const preview = (args) => (
  <div style={{ display: "flex", width: args.width+"px", height: args.height+"px" }}>
    <MultiLevelDropdown {...args} />
  </div>
);

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Main/MultiLevelDropdown",
  component: preview,
  argTypes: {
    width: { control: { type: "number", step: 2 } },
    height: { control: { type: "number", step: 2 } },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => preview;

export const OneLevel = {
  args: {
    width: 200,
    height: 50,
    options: data.oneLevel,
  },
};

export const TwoLevel = {
  args: {
    width: 200,
    height: 50,
    options: data.twoLevel,
  },
};

export const MultiLevel = {
  args: {
    width: 200,
    height: 50,
    options: data.multiLevel,
  },
};

export const WithCustomComponents = {
  args: {
    width: 200,
    height: 50,
    options: data.withCustomComponents,
  },
};
