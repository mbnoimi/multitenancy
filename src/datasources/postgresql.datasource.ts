import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgresql',
  connector: 'postgresql',
  url: 'postgres://postgres:123654789@localhost/multitenancy',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12123654789',
  database: 'multitenancy'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgresql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgresql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
