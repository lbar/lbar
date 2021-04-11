import {Injectable, OnDestroy} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class TitleService implements OnDestroy {
  private prefix: string;
  private routerSub = new Subscription();

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected title: Title) {
    this.prefix = title.getTitle() && title.getTitle() !== '' ? title.getTitle() : undefined;
    this.routerSub.add(
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => {
                  let child = this.activatedRoute.firstChild;
                  while (child) {
                    if (child.firstChild) {
                      child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data.title) {
                      return child.snapshot.data.title as string;
                    } else {
                      return null;
                    }
                  }
                  return null;
                })
            )
            .subscribe((newTitle) => this.setTitle(newTitle))
    );
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  private setTitle(title: string) {
    if (title) {
      if (this.prefix) {
        this.title.setTitle(`${this.prefix} — ${title}`);
      } else {
        this.title.setTitle(`${title}`);
      }
    } else {
      this.title.setTitle(this.prefix);
    }
  }
}
