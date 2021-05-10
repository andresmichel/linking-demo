# =============================================================================
# © You i Labs Inc. 2000-2020. All rights reserved.

# This file is loaded after the yi_add_executable(), target_include_directories() and target_link_libraries() function calls and loading of the NativeModules.cmake file in CMakeList.txt
#
# This can add additional library targets in a way where the main CMakeLists.txt file does not have to be changed.

if(NOT TARGET youi::appium_server)
    find_package(YouiEngine
        ${YI_YOUI_ENGINE_VERSION}
        COMPONENTS
            appium_server
        HINTS
            ${YouiEngine_DIR}
        REQUIRED
    )
endif()

target_link_libraries(${YI_PROJECT_NAME}
    PRIVATE
        youi::appium_server
)
