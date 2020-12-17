import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Componentes:
import { AppComponent } from './app.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';

// Rutas:
import{RouterModule} from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/DomSeguro/dom-seguro.pipe';
import { PassPipe } from './pipes/pass/pass.pipe';
import { FormsModule } from '@angular/forms';
import { ApiComponent } from './components/api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    NavbarComponent,
    ErrorComponent,
    HeroComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PassPipe,
    ApiComponent
  ],
  // Se importaron las carpetas:
  // Sale el texto en la barra de direción.
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // Para que al iniciar el servidor salga la página home-- {path: '', component:HomeComponent}, --:
      {path: '', component:HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'heros', component:HerosComponent},
      {path: 'about', component:AboutComponent},
      // Botón de heros.component.html:
      // Por el /:parámetro, params del heros.component.hs [id].
      {path: 'hero/:id', component:HeroComponent},
      // Path del buscador:
      {path: 'results/:termino', component:BuscadorComponent},
      // Pipes (tema):
      {path: 'pipes',component:PipesComponent},
      {path: 'api', component: ApiComponent},
      {path: '**', pathMatch:'full', component:ErrorComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
