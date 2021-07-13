import { Activity } from '../../../models/activity'
import { Segment, Item,Button,Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

// interface Props{
//     activities: Activity[];
//     // selectActivity: (id: number) => void;
//     handleDeleteActivity: (id: number) => void;

// }

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    
    
    return (
        <Segment>
            <Item.Group divided>
                {
                    activityStore.activities.flatMap(activity =>(
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.title}</Item.Header>
                                <Item.Meta>{activity.thumbnailUrl}</Item.Meta>                       
                               </Item.Content>
                               <Item.Extra>
                               <Button onClick={() => activityStore.deleteActivity(activity.id)} floated='right' content='delete' color='red'/>

                                    <Button onClick={() => activityStore.selectActivity(activity.id)} floated='right' content='view' color='blue'/>
                               <Label basic content={activity.albumId} />
                               </Item.Extra>
                        </Item>
                    ))
                }
            </Item.Group>
        </Segment>
    )
}
)