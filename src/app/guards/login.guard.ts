import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard = () => {
  const router = inject(Router);
  const dom = inject(DOCUMENT);
  const localStorage = dom.defaultView?.localStorage;

  if (!localStorage) {
    return false;
  }

  if (localStorage.getItem('token')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
