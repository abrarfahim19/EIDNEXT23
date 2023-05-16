import { ToastContainer, toast } from "react-toastify";
import Button from "../../components/Button";
import InputComp from "../../components/InputComp";
import Layout from "../../components/Layout";
import "react-toastify/dist/ReactToastify.css";

const GPTPrompt = () => {
  const onPressHandler = () => {
    toast("Message is sent!");
  }
  return (
    <Layout>
      {/* <h1 className="text-2xl text-blue-500">GPT Prompter</h1> */}
      <InputComp
        tag={"Prompt"}
        type={"text"}
        placeholder={"Find the metadata of ..."}
      />
      <InputComp
        tag={"Keys"}
        type={"text"}
        placeholder={"Eggs, Chicken, Beef..."}
      />
      <Button title={"Go"} onClick={onPressHandler}/>
      <ToastContainer />
    </Layout>
  );
};

export default GPTPrompt;
