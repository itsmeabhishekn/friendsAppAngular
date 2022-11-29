import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.css']
})
export class FriendViewComponent {

constructor(private api:ApiService)
{
  api.fetchFriends().subscribe(
    (response) => {
      this.data = response
    }
  )
}

  data:any=[]

}
