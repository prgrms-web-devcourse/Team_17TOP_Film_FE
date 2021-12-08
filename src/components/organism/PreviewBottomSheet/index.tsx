import { useParams } from 'react-router';

const PreviewBottomSheet = () => {
  const { id } = useParams();
  console.log('params :>> ', id);
  return <div>PreviewBottomSheet</div>;
};
export default PreviewBottomSheet;
