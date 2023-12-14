const fileTreeData = {
  "root": {
    "name": "virtual-commissioning",
    "type": "folder",
    "icon": "folder-icon",
    "children": {
      "MainFloor": {
        "name": "MainFloor",
        "type": "folder",
        "icon": "project",
        "children": {
          "LayoutDesign": {
            "name": "LayoutDesign",
            "type": "file",
            "icon": "design"
          },
          "SafetyProtocols": {
            "name": "SafetyProtocols",
            "type": "file",
            "icon": "design"
          },
          "HardwareIntegration": {
            "name": "HardwareIntegration",
            "type": "folder",
            "icon": "project",
            "children": {
              "SensorConfig": {
                "name": "SensorConfig",
                "type": "file",
                "icon": "sensor"
              },
              "MotorControl": {
                "name": "MotorControl",
                "type": "file",
                "icon": "setting"
              }
            }
          }
        }
      },
      "SystemConfiguration": {
        "name": "SystemConfiguration",
        "type": "folder",
        "icon": "system",
        "children": {
          "NetworkSettings": {
            "name": "NetworkSettings",
            "type": "file",
            "icon": "setting"
          },
          "UserManagement": {
            "name": "UserManagement",
            "type": "folder",
            "icon": "system",
            "children": {
              "AccessControl": {
                "name": "AccessControl",
                "type": "file",
                "icon": "setting"
              }
            }
          }
        }
      },
      "Library": {
        "name": "Library",
        "type": "folder",
        "icon": "library",
        "children": {
          "SiemensS7-1200": {
            "name": "SiemensS7-1200",
            "type": "file",
            "icon": "controller"
          },
          "RockwellControlLogix": {
            "name": "RockwellControlLogix",
            "type": "file",
            "icon": "controller"
          },
          "MitsubishiFXSeries": {
            "name": "MitsubishiFXSeries",
            "type": "file",
            "icon": "controller"
          },
          "SchneiderModicon": {
            "name": "SchneiderModicon",
            "type": "file",
            "icon": "controller"
          },
          "ABBAC500": {
            "name": "ABBAC500",
            "type": "file",
            "icon": "controller"
          }
        }
      }
    }
  }
}

export default fileTreeData;