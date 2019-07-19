import React, { Component } from 'react';
import { Icon, Pagination } from 'semantic-ui-react';


export default class Paginating extends Component {

  render() {
    const {onCount, pageSize} = this.props;
    const paginationtotal= Math.ceil(onCount/pageSize);

    return (

      <Pagination
        defaultActivePage={this.activePage}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={paginationtotal}
        onPageChange={this.props.onPaginationChange}
        //onClick= {() => }
        //onClick = {() => this.props.onMove(active)}
      />
    );
  }
}
