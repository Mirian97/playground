import { useNavigate } from "react-router-dom";

const useBackPreviousPage = () => {
  const navigate = useNavigate();
  const backToPreviousPage = () => navigate(-1);
  return { backToPreviousPage };
};

export default useBackPreviousPage;
