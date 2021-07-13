import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from "../form/activityForm"
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'
interface Props{
    activities: Activity[];
    // selectedActivity: Activity | undefined;
    // selectActivity: (id: number) => void;
    // cancelSelectActivity: () => void;
    // editMode: boolean;
    // handleFormOpen: (id: number) => void;
    // handleFormClose: () => void;
    handleDeleteActivity: (id: number) => void;
    // handleCreateOrEditActivity: (activity: Activity) => void;
}

export default observer(function ActivityDashboard({handleDeleteActivity, activities}: Props) {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                // activities={activities}  
                // selectActivity={selectActivity}
                // handleDeleteActivity={handleDeleteActivity}
                />
               
            </Grid.Column>
            <Grid.Column width='6'>
                { selectedActivity && !editMode &&
                <ActivityDetails 
                // activity={selectedActivity} 
                // cancelSelectActivity={cancelSelectActivity} 
                // handleFormOpen={handleFormOpen}
                /> }
                {editMode &&
                <ActivityForm 
                // handleFormClose={handleFormClose}
                // selectedActivity={selectedActivity} 
                // handleCreateOrEditActivity={handleCreateOrEditActivity}
                />
                }
            </Grid.Column>
        </Grid>
    )
})
