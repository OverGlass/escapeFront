import {Component, OnInit} from "@angular/core";
import {SportService, UserService} from '../../Services';
@Component({
    selector:'profil',
    templateUrl:'profil.template.html',

})

export class ProfilComponent implements OnInit{
    private userID = localStorage.getItem('id');

    constructor(
      private sportService : SportService,
      private userService : UserService,

    ){}

    event;
    friends={
            user: this.userID - 0,
            idUserFriend:null,
    };

    myfriends=[];
    tab=[];

    // -------- SPORT ----------


    public querySearch = "";

    public lesSports = [];
    public nomsSport=[];

    public filteredList = [];

    public elementRef;

ngOnInit(){
    this.getAllUsers();
    this.getFriendsuser();


}

    // -------- FRIENDS ----------


    getFriendsuser(){
        this.userService.getFriendsUsers()
            .subscribe(
                res => {
                    this.myfriends = res[0];
                    console.log(this.myfriends);
                    for(var i =0; i < this.myfriends.length; i++){
                       this.tab.push(this.myfriends[i].idUserFriend.username + ' ' + this.myfriends[i].idUserFriend.firstname);
                       // this.tab.push(this.myfriends[0].idUserFriend.username+ ' ' + this.myfriends[0].idUserFriend.firstname);
                       //  tab=this.myfriends[i].idUserFriend.username;

                        // for(var y=0; y < tab.length; i++) {
                        //    var tab2 =  tab[i];
                        // }
                    }
                    console.log(this.tab);
                    // console.log(tab2);
                });
    }

    postFriends(friends){
        this.userService.postFriendsUsers(friends)
            .subscribe(
                res => {
                    // this.myfriends = res;
                    console.log(res);
                });
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