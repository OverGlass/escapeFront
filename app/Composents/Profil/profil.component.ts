import {Component, OnInit, NgZone} from "@angular/core";
import {SportService, UserService} from '../../Services';
import {Router} from "@angular/router"
import {EventService} from "../../Services/events.service";
import {} from 'rxjs';
@Component({
    selector:'profil',
    templateUrl:'profil.template.html',

})

export class ProfilComponent implements OnInit{
    private userID = localStorage.getItem('id');

    constructor(
      private sportService : SportService,
      private userService : UserService,
      private eventService : EventService,
      private router : Router,

    ){}

    resa2 = 0;
    alreadyRes2 =true;
    canDelete =true;
    // event={};

    events;
    eventID=[];
    eventContent=[];
    friends={
            user: this.userID - 0,
            idUserFriend:null,
    };

    myfriends=[];
    tab=[];

    users;

    passEmail={
        password:null,
        login:null,
};

    password;

    resetComfirm=false;

    // -------- SPORT ----------


    public querySearch = "";

    public lesSports = [];
    public nomsSport=[];

    public filteredList = [];

    public elementRef;

ngOnInit(){
    this.getAllUsers();
    this.getFriendsuser();
    this.getMyEvents();
    this.getUsers();



}


getMyEvents(){
    this.eventService.getMyEvents(this.userID).subscribe(
        res => {
            this.events=res;
            console.log(this.events);

            for(var i =0; i < this.events.length; i++) {
                this.eventContent.push(this.events[i].event);
                this.eventContent[i].id = this.events[i].id;
            }

            console.log(this.eventContent);

        }
    );
}

    clickEvent(id){

    }

    unfollowEvent(data2) {
        // console.log(this.sub);
        // for (var i = 0; i = this.eventSubscribe.length; i++) {
        // this.sub.push(this.eventSubscribe[i];

        // }

        // console.log(this.eventSubscribe[0].event);
        this.eventContent = [];
            this.getMyEvents();

        console.log('test');

        alert('Vous vous êtes bien désinscrit de l\'évenement');


        this.eventService.unfollowEvent(data2)
            .subscribe(res => {
                console.log(res)
            });

    }

    // -------- FRIENDS ----------



    changePass(){

        this.passEmail.login = this.users.email;
        this.passEmail.password = this.password;
        console.log(this.passEmail);
        console.log(this.users);
        this.userService.postResetPass(this.passEmail)
            .subscribe(
                res => {
                    console.log(res);
                    if(res.Action) {
                        this.resetComfirm = true;
                        this.password=null;
                        // setTimeout(this.resetComfirm=true, 10000);
                    }
                }
            )
    }


    deleteAccount(){
        if (confirm('Etes vous sûr de bien vouloir supprimer votre compte ?')){
            this.userService.deleteUsers()
                .subscribe(
                    res => {
                        // this.myfriends = res;
                        console.log(res);
                        this.router.navigate(['/main-component']);

                    });
        } else {

        }
    }

    deleteFriend(id){

        var friends={
            user: this.userID - 0,
            idUserFriend:id,
        };

        console.log(friends);

        this.userService.deleteFriendsUsers(friends)
            .subscribe(
                res => {
                    // this.myfriends = res;
                    console.log(res);
                    this.myfriends = [];
                    this.getFriendsuser();
                });



    }
    getFriendsuser(){
        this.userService.getFriendsUsers()
            .subscribe(
                res => {
                    this.myfriends = res[0];
                    console.log(this.myfriends);
                });
    }

    postFriends(friends){
        this.userService.postFriendsUsers(friends)
            .subscribe(
                res => {
                    // this.myfriends = res;
                    console.log(res);
                    this.myfriends = [];
                    this.getFriendsuser();
                });
    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
                res => {
                    this.users = res;
                });
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }

    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe(
                res => {
                    this.lesSports = res;
                    // console.log(JSON.stringify(res));
                    for (var i =0;i < this.lesSports.length; i++){
                        // this.nomsSport.push(this.lesSports[i]);
                        // console.log(this.nomsSport);


                        this.nomsSport.push(this.lesSports[i].username + ' ' + this.lesSports[i].firstname);
                    }
                    console.log(this.nomsSport );
                });
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }
    filter2() {
        for (var i = 0; i < this.lesSports.length; i++) {
            // this.nomsSport.push(this.lesSports[i]);
            // console.log(this.nomsSport);
            var nomPrenom = this.lesSports[i].username + ' ' + this.lesSports[i].firstname;

            if (this.querySearch == nomPrenom) {
                this.friends.idUserFriend = this.lesSports[i].id;
                console.log(JSON.stringify(this.friends));
                this.filteredList = [];
                this.querySearch = null;
            } else {
                console.log('Mauvaise entrée');

            }


        }
    }


    filter() {

        if (this.querySearch !== ""){
            this.filteredList = this.nomsSport.filter(function(el){
                return el.toLowerCase().indexOf(this.querySearch.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }

    select(item){
        this.querySearch = item;
        this.filter2();
        this.postFriends(this.friends);

        this.friends.idUserFriend = [];
    }

}