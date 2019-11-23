import {ActivityService} from '../services/ActivityService'
import {ActivityDate} from '../models/ActivityDate'
describe('ActivityService',function(){
    let testActivity: ActivityDate = {
        day: "2019/11/19",
        activites: [
            {
                title: "Yoga",
                duration: "0:60:0",
                intensity: 2,
                comments: "Test",
                isFavorite: true
            }]
    }; 

    describe('setActivity', function(){
        it('should Create a New Activity ',function(){
           // ActivityService.setActivities()
        });
    });

});