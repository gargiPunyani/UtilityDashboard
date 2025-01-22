import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./output.css";
import Home from "./AdminDashboard/Home";
import ProfileView from "./AdminDashboard/Profile";
import ResetPassword from "./AdminDashboard/Profile/ResetPass";
import Login from "./Login";
import ForgotPass from "./Login/ForgotPassword";
import CompanySetting from "./AdminDashboard/Settings/CompanySetting";
import SiteSettingOuter from "./AdminDashboard/Settings/SiteSettingOuter";
import FieldExecutive from "./AdminDashboard/Members/FieldExecutive";
import MobileHistory from "./Report/Mobile";
import Aeps from "./Report/Aeps";
import PendingReport from "./Report/PendingReport";
import AdminProfit from "./Report/AdminProfitReport";
import CreateUser from "./AdminDashboard/Members/FieldExecutive/CreateNewUser";
import IncomeReport from "./Report/IncomeReport";
import Admin from "./UserIncome/Admin";
import SuperAdminIncome from "./UserIncome/SuperAdmin";
import Distributor from "./UserIncome/Distributor";
import NotWorking from "./UserIncome/NotWorkingMember";
import CommissionBal from "./Payment/CommissionBalance";
import BalanceReturn from "./Payment/BalanceReturn";
import RefundManager from "./Report/RefundManager";
import LedgerReport from "./Report/LedgerReport";
import DebitReport from "./Report/PaymentReport/DebitReport";
import CreditReport from "./Report/PaymentReport/creditReport";
import PaymnetView from "./Payment/PaymentView";
import SolvedDisputes from "./Disputes/SolveDisputes";
import PendingDisputes from "./Disputes/PendingDispute";
import FEIncome from "./UserIncome/FEIncome";
import SuspendedUserInc from "./UserIncome/SuspendedUser";
import ReatilerIncome from "./UserIncome/RetailerIncome";
import BankSetting from "./AdminDashboard/Settings/BankSetting";
import NewBank from "./AdminDashboard/Settings/BankSetting/NewBankAccount";
import PackageSetting from "./AdminDashboard/Settings/PackageSetting";
import SMSSetting from "./AdminDashboard/Settings/SmsSetting";
import OtpVerify from "./Login/ForgotPassword/OTPVerify";
import NotWorkingList from "./AdminDashboard/Members/NotWorkingList";
import BalanceReturnReq from "./Payment/BalanceReturnReq";
import PurchaseBal from "./Payment/PurchaseBalance";
import BankMaster from "./Master/BankMaster";
import RoleMaster from "./Master/RoleMaster";
import StatusMaster from "./Master/StatusMaster";
import ServiceMaster from "./Master/ServiceMaster";
import PaymentMethod from "./Master/PayMethod";
import AgentOnboarding from "./Master/AgentOnboarding";
import ContactEnquiry from "./Master/ContactEnquiry";
import CompanyStaff from "./Master/CompanyStaff";
import Broadcast from "./Master/Broadcast";
import Pancard from "./Report/Pancard";
import Investment from "./Report/Investment";
import ApiSummary from "./Report/ApiSummary";
import Upi from "./Report/Upi";
import QRCollection from "./Report/QRCollection";
import WalletTransfer from "./Report/WalletTransfer";
import Franchise from "./AdminDashboard/Members/Franchise";
import Payout from "./Report/Payout";
import SuperDistributor from "./AdminDashboard/Members/SuperDistributor";
import DistributorDS from "./AdminDashboard/Members/Distributor";
import RetailerRT from "./AdminDashboard/Members/Retailers";
import FranchiseFSDS from "./UserIncome/Franchise";
import BalanceTransfer from "./Payment/BalanceTransfer";
import Banking from "./Report/Banking";
import Verify from "./Report/Verify";
import BilPay from "./Report/BillPay";
import SuspendedUser from "./AdminDashboard/Members/SuspendedUser";
import NewPackage from "./AdminDashboard/Settings/PackageSetting/NewPackage";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPass/>}/>
          <Route path="/verify-otp" element={<OtpVerify/>}/>
          
          <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/profile" element={<ProfileView />} />
          {/* password */}
          <Route path="/reset" element={<ResetPassword />} />
        {/* settings */}
          <Route path="/company-settings" element={<CompanySetting/>}/>
          <Route path='/site-settings' element={<SiteSettingOuter/>}/>
          <Route path="/bank-setting" element={<BankSetting/>} />
          <Route path="/new-bank-account" element={<NewBank/>}/>
          <Route path="/package-setting" element={<PackageSetting/>}/>
          <Route path="/sms-settings" element={<SMSSetting/>}/>
          <Route path="/new-package" element={<NewPackage/>}/>
          {/* report */}
          <Route path="/pending-report" element={<PendingReport/>}/>
          <Route path="/ledger-report" element={<LedgerReport/>}/>
          <Route path="/credit-report" element={<CreditReport/>}/>
          <Route path="/mobile-history" element={<MobileHistory/>}/>
          <Route path="/debit-report" element={<DebitReport/>}/>
          <Route path="/aeps" element={<Aeps/>}/>
          <Route path="/refund-manager" element={<RefundManager/>}/>
          <Route path='/banking' element={<Banking/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/bill-payments" element ={<BilPay/>} />
          <Route path="/admin-report" element={<AdminProfit/>}/>
          <Route path="/pancard" element={<Pancard/>}/>
          <Route path="/payout" element={<Payout />}/>
          <Route path="/investment" element={<Investment/>}/>
          <Route path="/api-summary" element={<ApiSummary/>}/>
          <Route path="/upi" element={<Upi/>}/>
          <Route path="/qr-collection" element={<QRCollection/>} />
          <Route path="/wallet-transfer" element={<WalletTransfer/>} />
          {/* members */}
          <Route path="/field-executive" element={<FieldExecutive/>}/>
          <Route path="/distributor-ds" element={<DistributorDS/>}/>
          <Route path="/retailer" element={<RetailerRT/>}/>
          <Route path="/create-user" element={<CreateUser/>}/>
          <Route path="/franchise" element={<Franchise/>}/>
          <Route path="/not-working" element={<NotWorking />}/>   
          <Route path="/commission-detail" element={<CommissionBal/>}/>
          <Route path="/super-distributor" element={<SuperDistributor/>}/>     
          <Route path="/balance-return" element={<BalanceReturn/>}/>
          <Route path="/balance-transfer" element={<BalanceTransfer/>}/>
          <Route path="/suspended-user" element={<SuspendedUser/>}/> 
          {/* disputes */}
          <Route path="/solve-dispute" element={<SolvedDisputes/>}/>
          <Route path="/pending-disputes" element={<PendingDisputes/>}/>

          {/* userIncome & Payment*/}
          <Route path="/super-admin" element={<SuperAdminIncome/>}/>
          <Route path="/payment-view" element={<PaymnetView/>}/>
          <Route path="/admin-income" element={<Admin/>}/>
          <Route path="/income-data" element={<IncomeReport/>}/>
          <Route path="/fe-income" element={<FEIncome/>}/>
          <Route path="/retailer-income" element={<ReatilerIncome/>}/>
          <Route path="/suspended-user-income" element={<SuspendedUserInc/>}/>
          <Route path="/not-working-user-list" element={<NotWorkingList/>}/>
          <Route path= "/balance-return-request" element={<BalanceReturnReq/>} />
          <Route path= "/purchase-bal" element={<PurchaseBal/>}/>
          <Route path="/franchise-fsds" element={<FranchiseFSDS/>}/>
         
          {/* Master Section */}
          <Route path="/bank-master" element={<BankMaster/> }/>
          <Route path="/role-master" element={<RoleMaster/> }/>
          <Route path="/status-master" element={<StatusMaster/>}  />
          <Route path="/service-master" element={<ServiceMaster/>}  />
          <Route path="/payment-beneficiary-method" element={<PaymentMethod/>}  />
          <Route path="/agent-onboarding-list" element={<AgentOnboarding/>} />
          <Route path="/contact-enquiry" element={<ContactEnquiry/>} />
          <Route path="/company-staff-permission" element={<CompanyStaff/>}  />
          <Route path="/broadcast" element={<Broadcast/>} />
          </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
