import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';

const exportedComponents = [HeaderComponent, FooterComponent];

const importExportModules = [CommonModule];

@NgModule({
  declarations: [...exportedComponents],
  imports: [...importExportModules],
  exports: [...exportedComponents, ...importExportModules],
})
export class SharedModule {}
