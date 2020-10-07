@extends('layouts.app')

@section('content')
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <h5 class="text-center pt-4">Créer une Compte</h5>
                <form class="login100-form validate-form" method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                        <span class="label-input100">Nom</span>
                        <input class="input100 @error('name') is-invalid @enderror" type="text" name="name" placeholder="Entrer Votre Nom">
                        <span class="focus-input100"></span>
                        @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                    </div>
                    <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                        <span class="label-input100">Email</span>
                        <input class="input100 @error('email') is-invalid @enderror" type="email" name="email" placeholder="entrer votre email">
                        <span class="focus-input100"></span>
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                    </div>
                    <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                        <span class="label-input100">Mot de Passe</span>
                        <input class="input100" type="password" name="password" placeholder="Entrer Votre Mot de Passe" required autocomplete="new-password">
                        <span class="focus-input100"></span>
                        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                        @enderror
                    </div>
                    <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                        <label for="password-confirm" class="label-input100">Confirmer Mot de Passe</label>
                        <input class="input100" type="password" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmer Votre Mot de Passe" id="password-confirm">
                        <span class="focus-input100"></span>
                    </div>
                    <div class="flex-sb-m w-full p-b-30">

                        <div>
                            <a href="#" class="txt1">
                                il y à une compte?
                            </a>
                            <a href="{{url('/login')}}" class="txt1">
                                Identifier ici
                            </a>
                        </div>
                    </div>
                    <div class="container-login100-form-btn">
                        <button type="submit" class="login100-form-btn btn-block">
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
