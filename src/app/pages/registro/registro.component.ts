import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProgramModel } from '../models/program.model';
import { AppService } from '../services/app.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  programs: ProgramModel[] = [];
  programsFilter: ProgramModel[] = [];

  user: UserModel = new UserModel('', '', '', '');

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  loadPrograms(): void {
    this.appService.getPrograms().subscribe((programs) => {
      this.programs = programs;
      this.filterPrograms(this.programs);
    });
  }

  filterPrograms(programas: ProgramModel[]): void {
    const hash = {};
    this.programsFilter = programas.filter((program) =>
      hash[program.id] ? false : (hash[program.id] = true)
    );
  }

  registrar(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }
    this.user.name = formulario.value.name;
    this.user.family_name = formulario.value.family_name;
    this.user.email = formulario.value.email;
    this.user.comment = formulario.value.comment;
    this.user.phone = formulario.value.phone;
    this.user.program = formulario.value.program;

    this.appService
      .registerUser(this.user)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
