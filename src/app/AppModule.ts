import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './shared/app-nav-bar/app-nav-bar.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
<<<<<<< HEAD:src/app/AppModule.ts
import { RouterModule, Routes } from '@angular/router';

=======
import { ViewSelectionService } from './view-selection-menu.service';
>>>>>>> main:src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    CharactersComponent,
    PokeTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
<<<<<<< HEAD:src/app/AppModule.ts
    MaterialModule,
    RouterModule.forRoot([
    { path: 'character', component: CharactersComponent },
    { path: 'pokeTable', component: PokeTableComponent },
    { path: '**', redirectTo: 'home' },
  ]),
],
  providers: [],
=======
    MaterialModule
  ],
  providers: [ViewSelectionService],
>>>>>>> main:src/app/app.module.ts

  bootstrap: [AppComponent],

  
})


export class AppModule {
}
