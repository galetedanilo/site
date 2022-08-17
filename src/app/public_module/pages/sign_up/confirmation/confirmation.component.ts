import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      const token = this.route.snapshot.queryParamMap.get('token');
      
      if(!token) {
        this.router.navigate(['signup', 'registration'])
      }
      
  }
}
