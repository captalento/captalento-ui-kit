import React from 'react';
import { List } from '../../src';

export default { title: 'Components/List' };

const modules = [
  {
    neme: 'Introdução',
  },
  {
    neme: 'Estruturas',
  },
  {
    neme: 'Estilizando com CSS',
  },
  {
    neme: 'Tabelas e formulários',
  },
  {
    neme: 'Acessibilidade',
  },
  {
    neme: 'Responsividade',
  },
  {
    neme: 'Projeto Final',
  },
  {
    neme: 'Bonûs',
  },
];

export function cols1() {
  return (
    <div className="w-full">
      <List className="grid-cols-1 gap-x-4">
        {modules.map((module) => {
          return (
            <List.Item>
              <p>{module.neme}</p>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}
export function cols2() {
  return (
    <List className="grid-cols-2 gap-x-4">
      {modules.map((module) => {
        return (
          <List.Item>
            <p>{module.neme}</p>
          </List.Item>
        );
      })}
    </List>
  );
}
export function cols3() {
  return (
    <List className="grid-cols-3 gap-x-4">
      {modules.map((module) => {
        return (
          <List.Item>
            <p>{module.neme}</p>
          </List.Item>
        );
      })}
    </List>
  );
}
export function cols4() {
  return (
    <div className="w-full">
      <List className="grid-cols-4 gap-x-4">
        {modules.map((module) => {
          return (
            <List.Item>
              <p>{module.neme}</p>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export function circle() {
  return (
    <List className="grid-cols-3 gap-x-4">
      {modules.map((module) => {
        return (
          <List.Item shape="circle">
            <p>{module.neme}</p>
          </List.Item>
        );
      })}
    </List>
  );
}

export function none() {
  return (
    <List className="grid-cols-3 gap-x-4">
      {modules.map((module) => {
        return (
          <List.Item shape="none" variant="purple">
            <p>{module.neme}</p>
          </List.Item>
        );
      })}
    </List>
  );
}

export function otherColor() {
  return (
    <List className="grid-cols-3 gap-x-4 grid-flow-col grid-rows-3">
      {modules.map((module) => {
        return (
          <List.Item shape="circle" variant="purple">
            <p>{module.neme}</p>
          </List.Item>
        );
      })}
    </List>
  );
}
