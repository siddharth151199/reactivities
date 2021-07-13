import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../../models/activity';
import './styles.css';
import NavBar from './NavBar';
// import { ducks } from '../../demo';
// import DuckItem from '../../DuckItem';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
// import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
function App() {
  const {activityStore} = useStore();
  const [activities, setActivities] = useState<Activity[]>([])
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  // const [editMode, setEditMode] = useState(false)
  // const [loading, setLoading] = useState(true)
  useEffect(() => {
    // axios.get<Activity[]>('https://jsonplaceholder.typicode.com/photos')
    // agent.Activities.list().then(response =>{
    //   console.log(response.slice(1,10))
    //   setActivities(response.slice(1,10))
    //   setLoading(false)
    // })
    activityStore.loadActivities()

  }, [activityStore])

// function handleSelectActivity(id: number){
//   setSelectedActivity(activities.find(x => x.id === id))
// }

// function handleCancelSelectActivity(){
//   setSelectedActivity(undefined)
// }
// function handleFormOpen(id?:number){
//   id? handleSelectActivity(id) : handleCancelSelectActivity();
//   setEditMode(true)
// }

// function handleFormClose(){
//   setEditMode(false)
// }
// function handleCreateOrEditActivity(activity: Activity){
//   activity.id
//     ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
//     : setActivities([...activities, activity]);

//     setEditMode(false);
//     setSelectedActivity(activity);
// }

function handleDeleteActivity(id: number){
  setActivities([...activities.filter(x=> x.id !== id)])
}
if(activityStore.loadingInitial){
  return <LoadingComponent content='Loading app' />
}

  return (
<Fragment>
<NavBar  />
     <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
     activities={activityStore.activities}
    //  selectedActivity={selectedActivity}
    //  selectActivity={activityStore.selectActivity}
    //  cancelSelectActivity={handleCancelSelectActivity}
    //  editMode={editMode}
    //  handleFormOpen={handleFormOpen}
    //  handleFormClose={handleFormClose}
    //  handleCreateOrEditActivity={handleCreateOrEditActivity}
     handleDeleteActivity={handleDeleteActivity}
     />
     </Container>
</Fragment>
   
  );
}

export default observer(App);
