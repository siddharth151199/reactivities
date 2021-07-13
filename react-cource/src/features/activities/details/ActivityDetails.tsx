import { Card, Image,Button } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store'
import { Activity } from '../../../models/activity'

// interface Props{
//     activity: Activity;
//     cancelSelectActivity: () => void;
//     handleFormOpen: (id: number) => void;

// }

export default function ActivityDetails() {
  const { activityStore } = useStore();  
  const {selectedActivity: activity} = activityStore;

  if (!activity) {
    return <LoadingComponent /> ;
  }

  return (
        <div>
    <Card fluid>
    <Image src={activity.url} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span className='date'>12/12/2015</span>
      </Card.Meta>
      <Card.Description>
        {activity.title}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
          <Button onClick={() => activityStore.openForm(activity.id) } basic color='blue' content='Edit' />
          <Button onClick={activityStore.cancelSelectedActivity} basic color='grey' content='Cancel' />
      </Button.Group>
    </Card.Content>
  </Card>
        </div>
    )
}
