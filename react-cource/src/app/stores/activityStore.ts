import { makeAutoObservable, runInAction} from "mobx";
import { Activity } from "../../models/activity";
import agent from "../api/agent";

export default class ActivityStore{
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        // makeObservable(this, {
        //     title: observable,
        //     setTitle: action
        // })
        makeAutoObservable(this)
    }

    loadActivities = async () =>{
        this.setLoadingInitial(true)
        try{    
            const activities = await agent.Activities.list();
            this.activities.push(...activities.slice(1,10))
            this.setLoadingInitial(false)

        }catch(error){
            console.log(error);
            this.setLoadingInitial(false)
        }
    }
    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state
    }
  
    selectActivity = (id: number) =>{
        this.selectedActivity = this.activities.find(a => a.id === id)
    }

    cancelSelectedActivity = () =>{
        this.selectedActivity = undefined
    }

    openForm = (id?: number) =>{
           id ? this.selectActivity(id) : this.cancelSelectedActivity();
           this.editMode = true
    }
    closeForm = () =>{
        this.editMode = false
    }

    createActivity = async (activity: Activity) =>{
        this.loading = true;
        activity.id = Math.floor(Math.random() * (10000 - 99 + 1)) + 99;
        try {
            runInAction(() =>{
                this.activities.push(activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
    
        } catch (error) {
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
        }
    }

    updateActivity = async(activity: Activity) =>{
        this.loading = true;
        try {
            runInAction(() =>{
                this.activities = [...this.activities.filter(a=> a.id !== activity.id), activity];
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
            
        } catch (error) {
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
        }
    }

    deleteActivity = async (id: number) =>{
        this.loading = true;

        try {
            runInAction(() =>{
            this.activities = [...this.activities.filter(a=>a.id!== id)];
            if(this.selectedActivity?.id === id) this.cancelSelectedActivity();
                // this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
        }

    }

}   //main parenthesis