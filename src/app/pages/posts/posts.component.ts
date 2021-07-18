import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes:any[]=[];
  subscribe:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.subscribe=this.dataService.getPost()
    .subscribe((posts: any) =>{
        this.mensajes=posts;
        console.log(posts);
      }
    );
    
    //si utilizo subscribe tengo que luego anular la subscripcion
    /*.subscribe(posts => {

      console.log(posts);
    })*/
  }

  escuchaClick(event:Number){

    console.log('clic en: ',event);
  }

  ngOnDestroy(): void {

    this.subscribe.unsubscribe();
  }

}
