import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';



export function RedirectToPathHome ({location}: RouteComponentProps){
      return <Redirect to ={{...location, pathname: "/home"}}/>
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function RedirectToHome (props:RouteComponentProps<{ outputCurrency: string }>){
  const {
    location: { search },
    match: {
      params: { outputCurrency },
    },
  } = props
  return (
    <Redirect
      to={{
        ...props.location,
        pathname: '/home',
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=${outputCurrency}`
            : `?outputCurrency=${outputCurrency}`,
      }}
    />
  )

}
