@extends('layouts.app')

@section('content')
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <h5 class="text-center pt-4">Identifier à votre Compte</h5>
                <form class="login100-form validate-form" action="{{ route('login') }}" method="POST">
                    @csrf
                    <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                        <label for="email" class="label-input100">Email</label>
                        <input class="input100 @error('email') is-invalid @enderror" value="{{ old('email') }}" type="email" name="email" placeholder="Entrer Votre Email" id="email" required autocomplete="email" autofocus>
                        <span class="focus-input100"></span>
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                        <label for="password" class="label-input100">Mot de Passe</label>
                        <input class="input100 @error('password') is-invalid @enderror" type="password" name="password" id="password" placeholder="Entrer Votre Mot de Passe" required autocomplete="current-password">
                        <span class="focus-input100"></span>
                        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="flex-sb-m w-full p-b-30">
                    </div>
                    <div class="container-login100-form-btn">
                        <button type="submit" class="login100-form-btn btn-block">
                            Identifier
                        </button>
                        @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
