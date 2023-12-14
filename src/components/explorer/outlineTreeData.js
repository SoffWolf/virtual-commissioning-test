const outlineTreeData = {
  Properties: {
    type: 'folder',
    children: {
      Configuration: { type: 'file' },
      VersionInfo: { type: 'file' },
      DeviceSettings: { type: 'file' },
    },
  },
  Interfaces: {
    type: 'folder',
    children: {
      Communication: {
        type: 'folder',
        children: {
          EthernetSettings: { type: 'file' },
          SerialPortConfig: { type: 'file' },
        },
      },
      IO_Mapping: {
        type: 'folder',
        children: {
          DigitalInputs: { type: 'file' },
          AnalogInputs: { type: 'file' },
          OutputSignals: { type: 'file' },
        },
      },
    },
  },
  ControlLogic: {
    type: 'folder',
    children: {
      MainProgram: { type: 'file' },
      SafetyRoutines: { type: 'file' },
      ErrorHandling: { type: 'file' },
    },
  },
  Events: {
    type: 'folder',
    children: {
      SystemEvents: { type: 'file' },
      UserEvents: { type: 'file' },
      Alarms: { type: 'file' },
    },
  },
  DataLogging: {
    type: 'folder',
    children: {
      OperationLogs: { type: 'file' },
      MaintenanceLogs: { type: 'file' },
      ErrorLogs: { type: 'file' },
    },
  },
};

export default outlineTreeData;