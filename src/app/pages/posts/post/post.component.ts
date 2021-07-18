import { Output } from '@angular/core';
import { Component, OnInit,Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPost= new EventEmitter<Number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.mensaje.id);
  }
}
