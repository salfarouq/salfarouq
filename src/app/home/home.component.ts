import { Component, Input } from '@angular/core';
import { WalimuListComponent } from '../walimu-list/walimu-list.component';
import { __extends } from 'tslib';
import { WanafunziListComponent } from '../wanafunzi-list/wanafunzi-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends WalimuListComponent {
  title2='wanafunzi wetu'
  title1='Walimu wetu'
  title3='jengo letu'
  walimu_wetu=' Nyuma ya wanafunzi kuna walimu walezi wa kike wanaolea na kuwasomesha wanafunzi wa kuwasaidia wanafunzi wanawake katika mambo mbali mbali yanayohusiana na hali zao'
  wanafunzi_wetu='    Picha ya wanafunzi wa markaz wakikabidhiwa vyetvya uthibitisho wa kumaliza kuhifadhi Quran tukufu huko markaz tahfidh kisauni'
  jengo_letu='Picha iliyopo hapo ndio picha ya muonekano wa jengo letu kwa nje likiwa na bango letu juu hapo ya nguzo ya geti letu'
}
