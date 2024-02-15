// =============================================================================

// ? Components

import App from "@components/App";

export {App};

// =============================================================================

// ? Pages

import Contact from "@pages/Contact/Contact";
import Curriculum from "@pages/Curriculum/Curriculum";
import HomePage from "@pages/HomePage/HomePage";
import NotFound from "@pages/NotFound/NotFound";
import Projects from "@pages/Projects/Projects";
import ProjectDetails from "@pages/ProjectDetails/ProjectDetails";

export {
    Contact, Curriculum, HomePage, NotFound, Projects, ProjectDetails
};

// =============================================================================

// ? Parts

import ChronologicalData from "@parts/ChronologicalData/ChronologicalData";
import ContactButton from "@parts/ContactButton/ContactButton";
import ContactForm from "@parts/ContactForm/ContactForm";
import Footer from "@parts/Footer/Footer";
import Header from "@parts/Header/Header";
import HeaderLogo from "@parts/HeaderLogo/HeaderLogo";
import HeaderLink from "@parts/HeaderLink/HeaderLink";
import HeaderMenu from "@parts/HeaderMenu/HeaderMenu";
import ProjectParts from "@parts/ProjectParts/ProjectParts";
import ScrollEmergence from "@parts/ScrollEmergence/ScrollEmergence";

export {
    ChronologicalData,
    ContactButton,
    ContactForm,
    Footer,
    Header,
    HeaderLogo,
    HeaderLink,
    HeaderMenu,
    ProjectParts,
    ScrollEmergence
};

// =============================================================================

// ? SVGs

import CopyIcon from "@svgs/CopyIcon/CopyIcon";
import DownloadIcon from "@svgs/DownloadIcon/DownloadIcon";
import LoadingIcon from "@svgs/LoadingIcon/LoadingIcon";
import ProgressionCircle from "@svgs/ProgressionCircle/ProgressionCircle";

export {
    CopyIcon, DownloadIcon, LoadingIcon, ProgressionCircle
};

// =============================================================================

// ? Other

import CurriculumVitae from "@assets/pdf/CurriculumVitae.pdf";
import {portfolioData as data} from "@assets/data.json";

export {CurriculumVitae, data};

// =============================================================================

// ? Functions utilities

import {cookieHandler} from "@utilities/cookieHandler";
import {errorSaver} from "@utilities/errorSaver";
import {getAge} from "@/utilities/getAge";
import {imageImporter} from "@utilities/imageImporter";

export {
    cookieHandler, errorSaver, getAge, imageImporter
};

// =============================================================================

// ? Store and slice

import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {portfolioActions, portfolioState} from "@slices/portfolioSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    portfolioActions,
    portfolioState,
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector
};

// =============================================================================

// ? Types and interfaces

import type {
    AppDispatch, AppStore, RootState
} from "@store/store";
import type {ProjectTypes} from "@/types/ProjectTypes";

export {
    AppDispatch, AppStore, RootState, ProjectTypes
};

// =============================================================================
