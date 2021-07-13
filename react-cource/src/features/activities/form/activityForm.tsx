import { observer } from 'mobx-react-lite';
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Segment,Form,Button } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import {Activity} from '../../../models/activity' 
// interface Props{
//     // handleFormClose: () => void;
//     // selectedActivity: Activity | undefined;
//     // handleCreateOrEditActivity: (activity: Activity) => void;
// }


export default observer (function ActivityForm() {

    const { activityStore } = useStore();  
    const {selectedActivity, closeForm, createActivity, updateActivity} = activityStore;
  

    const initialState = selectedActivity ?? {
        albumId: 0,
        id: 0,
        title: '',
        url: '', 
        thumbnailUrl: ''
    }
    const [activity, setActivity] = useState(initialState);
    function handleSubmit(){
        activity.id ? updateActivity(activity): createActivity(activity)
        // handleCreateOrEditActivity(activity)
    }
    function handleInputchange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder="Title" value={activity.title} name='title'  onChange={handleInputchange} />
                <Form.Input placeholder="URL"  value={activity.url} name='url' onChange={handleInputchange} />
                <Form.Input placeholder="ThumbnailUrl" value={activity.thumbnailUrl} name='thumbnailUrl'  onChange={handleInputchange}/>
                <Form.Input placeholder="Id" value={activity.id} name='id' onChange={handleInputchange} />
                <Form.Input placeholder="albumId" value={activity.albumId} name='albumId' onChange={handleInputchange} />
                <Button floated='right' type='submit' content='Submit' />
                <Button floated='right' onClick={closeForm} type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
)