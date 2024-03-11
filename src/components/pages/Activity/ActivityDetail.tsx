import { useNavigate, useParams, useRoutes } from 'react-router-dom';
import { useActivity } from '../../store/activity/activity_Store';

type Props = {
  click?: () => void;
};

function ActivityDetail({ match }: any) {
  const activityDetail = useActivity();

  return (
    <>
      <div>디테일 {activityDetail?.detail?.title}</div>
    </>
  );
}

export default ActivityDetail;
