const Data = {
  Users: {
    Collin: {
      Password: "First10Users",
      Admin: false,
      Developer: false
    },
    Developer: {
      Password: "DeveloperPAD",
      Admin: true,
      Developer: true
    },
    Admin: {
      Password: "AdminPAD",
      Admin: true,
      Developer: false
    }
  }
};

const API = {
  // API itself, makes sure Rumi-Ware is running like it should
  Utilities: {
    createWindow: function(Process) {
      const Div = document.createElement('div');
      Div.style.zIndex = 2147483647;
      Div.style.position = "absolute";
      Div.style.height = "150px";
      Div.style.width = "270px";
      Div.style.borderRadius = "5px";
      Div.style.top = "0px";
      Div.style.left = "0px";
      Div.style.backgroundColor = "#263238";
      document.body.appendChild(Div);
      
      return Div;
    },
    createTab: function(windowProcess, XPOS, YPOS, IconSVG, tabName) {
      const Tab  = document.createElement('button');
      Tab.style.innerHTML = toString(tabName);
      Tab.style.zIndex = 2147483647;
      Tab.style.position = "absolute";
      Tab.style.top = YPOS + "px";
      Tab.style.left = XPOS + "px";
      function svgCheck(iSVG) {
        if (iSVG != "") {
          return iSVG;
        }
      };
      
      Tab.outerHTML += svgCheck(IconSVG);
    }
  },
  Processors: {
    openProcess: function (PROCESS_NAME) {
      // The core API command, creates an open process, and allows things to continue on.
      const UserCheckingPrompt = prompt("Username Field");
      const PasswordCheckingPrompt = prompt("Password Field");

      if (Data.Users[UserCheckingPrompt]) {
        const user = Data.Users[UserCheckingPrompt];
        if (user.Password == [PasswordCheckingPrompt]) {
          alert(
            "What a legend. You actually got those two right? Enjoy Rumi-Ware, I guess!"
          );
        }
      }
    },

    checkForProcess: function (processName) {
      // Checks for a certain process, arguments { processName }
      Data.forEach(function (Value) {
        if (processName == Value) {
          return {
            FoundProcess: Value
          };
        }
      });
    },

    returnProcesses: function () {
      // Returns all processes. Simple, but will be used a lot.
      return {
        Data
      };
    }
  }
};
