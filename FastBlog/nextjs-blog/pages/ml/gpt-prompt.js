import Button from "../../components/Button";
import InputComp from "../../components/InputComp";
import Layout from "../../components/Layout";

const GPTPrompt = () => {
  return (
    <Layout>
      {/* <h1 className="text-2xl text-blue-500">GPT Prompter</h1> */}
      <InputComp
        tag={"Prompt"}
        type={"text"}
        placeholder={"Find the metadat of ..."}
      />
      <InputComp
        tag={"Keys"}
        type={"text"}
        placeholder={"Eggs, Chicken, Beef..."}
      />
      <Button title={"Go"} />
    </Layout>
  );
};

export default GPTPrompt;
