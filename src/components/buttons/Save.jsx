import { saveHandler } from "../../utils";
import { usePayload } from "../../hooks/usePayload";

const Save = () => {
  const { payload } = usePayload();
  const goHome = () => window.location.href = 'http://localhost:5173'
  const saveLogic = () => saveHandler(payload)
  
  return (
    <>
      <button onClick={saveLogic}>SAVE</button>
      <button onClick={goHome}>CANCEL</button>
    </>
  );
};

export default Save;
