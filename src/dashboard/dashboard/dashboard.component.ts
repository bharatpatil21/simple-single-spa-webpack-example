import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <div class="flex items-center shadow-md p-3 sticky top-0 left-0 bg-white">
      <div class="flex w-full">
        <img
          class="cursor-pointer"
          width="35"
          height="35"
          src="../.../../images/e-logo.png"
          alt="avatar"
        />
      </div>
      <div>
        <span class="cursor-pointer font-bold text-sm mx-4">Classes</span>
        <span class="cursor-pointer font-bold text-sm mx-4">Categories</span>
      </div>
      <div class="float-right flex flex-row items-center mx-3 cursor-pointer">
        <img
          class="rounded-full"
          width="28"
          height="28"
          src="https://avatars2.githubusercontent.com/u/21300044?s=400&u=50aa32ae8c1057a7eaccc35527c7c6b06cadac89&v=4"
          alt="avatar"
        />
        <span class="font-bold text-xs mx-2">Bharat Patil</span>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
