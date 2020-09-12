import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService,
    private spinner: Ng4LoadingSpinnerService, 
    private router: Router) { }

  ngOnInit() {
    this.listPersons();
  }

  add() {
    this.router.navigate(['dashboard/person/create-person']);
  }

  delete(id: string) {
    this.personService.delete(id).subscribe((data: any) => {
      if (!data.error) {
        this.listPersons();
      }
      else {
        alert(data.message);
      }
    });
  }

  private listPersons() {
    this.spinner.show();
    this.personService.list().subscribe((data: any) => {
      this.persons = data.result;
      this.spinner.hide();
    }, error => {
      console.log(error);
      this.spinner.hide();
    });
  }

}
