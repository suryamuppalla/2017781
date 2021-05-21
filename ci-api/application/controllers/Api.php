<?php
defined('BASEPATH') or exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class Api extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Contacts_model');
        $this->load->helper('url_helper');
    }
    public function contacts()
    {
        $contacts = $this->Contacts_model->getAllContacts();
        print json_encode($contacts);
    }
}
