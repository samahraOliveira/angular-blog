import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../datas/dataFake'

@Component({
  selector: 'app-components-content',
  templateUrl: './components-content.component.html',
  styleUrls: ['./components-content.component.css']
})
export class ComponentsContentComponent implements OnInit {

  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe ( value =>
      this.id=value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
      this.photoCover=result.photo
      this.contentTitle = result.title
      this.contentDescription = result.description
  }

}
